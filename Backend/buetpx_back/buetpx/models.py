from django.db import models

# Create your models here.
from django.db import models

# need to add specialization
class UserAccount(models.Model):
    
    name = models.CharField(max_length=200)
    # make it unique
    email = models.EmailField(max_length=200, unique=True)
    photo_url = models.URLField(max_length=200)
    hashedpass = models.CharField(max_length=200)
    
    def __str__(self):
        return self.name



class Category(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name

    

    def __str__(self):
        return self.name
        
class Place(models.Model):
    name = models.CharField(max_length=500)
    locality = models.CharField(max_length=500)
    sublocality = models.CharField(max_length=500)
    city = models.CharField(max_length=500)
    country = models.CharField(max_length=500)

    def __str__(self):
        return self.name

class Tags(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name





class Post(models.Model):
    post_title = models.CharField(max_length=500)
    post_date = models.DateTimeField(auto_now_add=True)
    photo_url = models.URLField(max_length=500)

    owner = models.ForeignKey(
        UserAccount, on_delete=models.CASCADE,
         related_name='posts'
         )
         
    category = models.ForeignKey(
          Category, 
          on_delete=models.CASCADE,
          related_name='posts'
    )
    place = models.ForeignKey(
            Place,
            on_delete=models.CASCADE,
            related_name='posts'

    )
    tags = models.ManyToManyField(
            Tags,
            blank=True,
            related_name='posts'
        )



    def __str__(self):
        return self.post_title

# comment entity
class Comment(models.Model):
    comment_txt = models.CharField(max_length=500)
    comment_date = models.DateTimeField(auto_now_add=True)
    post = models.ForeignKey(
            Post,
            on_delete=models.CASCADE,
            related_name='comments'
    )
    user = models.ForeignKey(
            UserAccount,
            on_delete= models.CASCADE,
            related_name='comments'
    )



    

class Gallery(models.Model):
    title =  models.CharField(max_length=200)
    description = models.TextField()
    # if true then it is public
    # if false then it is private
    visibilty = models.BooleanField(default=True)
    

class Tutorial(models.Model):
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=200, blank = False, default='')
    published = models.BooleanField(default=False)

    def __str__(self):
        return self.tutorial_title

