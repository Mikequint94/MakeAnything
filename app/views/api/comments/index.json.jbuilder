@comments.each do |comment|
  json.set! comment.id do
    json.id comment.id
    json.body comment.body
    json.project_id comment.project_id
    json.user do
      json.extract! comment.user, :id, :username, :img_url
    end
  end
end
