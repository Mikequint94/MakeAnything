@projects.each do |project|
  json.set! project.id do
    json.id project.id
    json.title project.title
    json.img_url project.img_url
    json.video_url project.video_url
    json.description project.description
    json.author_id project.author_id
  end
end
