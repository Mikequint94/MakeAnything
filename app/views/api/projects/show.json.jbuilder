json.project do
  json.extract! @project, :id, :title, :img_url, :video_url, :description, :author_id
  json.author @project.author, :id, :username, :img_url
end
