json.comment do
  json.extract! @comment, :id, :body, :user_id, :project_id
  json.user @comment.user, :id, :username, :img_url
end
