
@projects.each do |project|
  json.set! project.id do
    json.extract! project, :id, :title, :img_url
    json.author do
      json.extract! project.author, :id, :username, :img_url
    end
  end
end
