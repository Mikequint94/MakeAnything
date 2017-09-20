@projects.each do |project|
  json.set! project.id do
    json.id pokemon.id
    json.title project.title
    json.image_url project.image_url
    json.video_url project.video_url
    json.description project.description
    json.author_id project.author_id
  end
end
