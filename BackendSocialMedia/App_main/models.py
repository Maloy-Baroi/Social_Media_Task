from django.db import models
from django.contrib.auth.models import User

from App_login.models import CustomUser


# Create your models here.
class PostModel(models.Model):
    author = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='post')
    post_text = models.TextField(blank=True, max_length=256)
    upload_date = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-upload_date"]

    def __str__(self):
        return self.post_text


    def get_author_name(self):
        if self.author.profile.full_name:
            return self.author.profile.full_name
        else:
            self.author.email

    def get_total_Likes(self):
        own_post = self
        total_likes = own_post.liked_post.count()
        return total_likes


class LikeModel(models.Model):
    post = models.ForeignKey(PostModel, on_delete=models.CASCADE, related_name='liked_post')
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='liker')
    like_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return "{} : {}".format(self.user, self.post)


class CommentModel(models.Model):
    post = models.ForeignKey(PostModel, on_delete=models.CASCADE, related_name='post_comment')
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='user_comment')
    comment = models.TextField()
    comment_date = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-comment_date']

    def __str__(self):
        return self.comment

