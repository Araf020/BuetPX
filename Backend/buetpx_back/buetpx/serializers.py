from unicodedata import category
from rest_framework import serializers 
from buetpx.models import Tutorial
from buetpx.models import Post
from buetpx.models import Place
from buetpx.models import Tags
from buetpx.models import Category
from buetpx.models import Comment
from buetpx.models import UserAccount

 
 
class TutorialSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Tutorial
        fields = ('id',
                  'title',
                  'description',
                  'published')
        
class UserAccountSerializer(serializers.ModelSerializer):
  # posts = PostSerializer(many=True, read_only=True)

  class Meta:

    # ordering = ['-id']
    model = UserAccount
    fields = ('id',
              'name',
              'email',
              'photo_url',
              'hashedpass',
              'posts'
              )




 
class PostSerializer(serializers.ModelSerializer):
    owner = UserAccountSerializer()
    # serializers.Sl
    # category = serializers.SlugRelatedField(read_only=True, slug_field='name' )
    # place = serializers.SlugRelatedField(read_only=True, slug_field='name' )
    # tags = serializers.StringRelatedField(many=True, read_only=True)
    
    class Meta:
        # ordering  = ['-post_date']
        model = Post
        fields = (
                  'id',
                  'post_title',
                  'post_date',
                  'photo_url',
                  'owner',
                  # 'owner_name',
                  # 'category',
                  # 'place',
                  # 'tags',
                  )
        # extra_kwargs = {'tags':{'required': False}}


class TagsSerializer(serializers.ModelSerializer):
  
  # posts = PostSerializer(many=True, read_only=True)

  class Meta:

    ordering = ['-id']
    model = Tags
    fields = ('id',
              'name',
              'posts'
              )
    # extra_kwargs = {'tags': {'required': False}}



class CategorySerializer(serializers.ModelSerializer):
  # posts = StringRelatedField(many=True, read_only=True)
  
  class Meta:

    # ordering = ['-id']
    model = Category
    fields = ('id',
              'name',
              'posts'
              )

class PlaceSerializer(serializers.ModelSerializer):


  class Meta:

    ordering = ['-id']
    model = Place
    fields = ('id',
              'name',
              # 'locality',
              # 'sublocality',
              'city',
              'country',
              )


# user_id  = je comment korse 
class CommentSerializer(serializers.ModelSerializer):


  class Meta:

    ordering = ['-id']
    model = Comment
    fields = ('id',
              'comment_txt',
              'comment_date',
              'post',
              'user'
              )



# category; tag; location; comment; (num of like); 
class SinglePostSerializer(serializers.ModelSerializer):
    # comment = CommentSerializer()
    
    place = PlaceSerializer()
    category = CategorySerializer()
    # tags = TagsSerializer()
    
    class Meta:

      ordering = ['-id']
      model = Post
      fields = ('id',
                'post_title',
                'photo_url',
                'place',
                'category',
                # 'tags',
                # 'comment',
                )
      
      
class CommentSerializer2(serializers.ModelSerializer):
  post = SinglePostSerializer()

  class Meta:

    ordering = ['-post']
    model = Comment
    fields = ('id',
              'comment_txt',
              'comment_date',
              'post',              
              )


# user_id  = je comment korse 
class CommentSerializer3(serializers.ModelSerializer):


  class Meta:

    model = Comment
    fields = ('id',
              'comment_txt',
              'comment_date',
              'post',
              'user'
              )
