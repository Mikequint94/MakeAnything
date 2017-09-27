
@projects.each do |project|
  json.set! project.id do
    json.extract! project, :id, :title, :img_url
    json.author do
      json.extract! project.author, :id, :username, :img_url
    end
  end
end

# @users.each do |user|
#   json.set! user.id do
#     json.extract! user, :id, :username, :email, :session_token, :img_url
#   end
# end
