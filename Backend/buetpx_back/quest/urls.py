from django.urls import path
from quest import views 
 
urlpatterns = [ 
    path('api/insert_quest',views.insert_quest),
    path('api/quest_by_id/<id>',views.quest_by_id),
    path ('api/insert_submission', views.insert_submission),
    # insert_submission = submitPhoto
    path ('api/get_posts_by_userid/<id>', views.get_posts_by_userid),
    path ('api/get_posts_all_data', views.get_posts_all_data),
    path ('api/get_active_quests', views.get_active_quests),
    path ('api/get_all_quests', views.get_all_quests),
    path ('api/update_quest_status/<id>', views.update_quest_status),

    path ('api/post_like_with_id/<id>', views.post_like_with_id),
    # update_post_shortlisted
    path ('api/update_post_shortlisted1/<id>/<post_id>', views.update_post_shortlisted1),
    # update_post_shortlisted2
    path ('api/update_post_shortlisted/<id>/', views.update_post_shortlisted),
    path ('api/get_ended_quests', views.get_ended_quests),
    path ('api/get_submission_by_questid/<id>', views.get_submission_by_questid),
    path ('api/delete_quest/<id>', views.delete_quest),
    path ('api/get_shortlisted_photo/<id>', views.get_shortlisted_photo),

    
    
]