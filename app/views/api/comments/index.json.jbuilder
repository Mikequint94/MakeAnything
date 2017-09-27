@comments.each do |comment|
  json.set! comment.id do
    json.id comment.id
    json.title comment.title
    json.project_id comment.project_id
    json.user comment.user, :id, :username, :img_url
  end
end
