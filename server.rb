require "sinatra"
require "sinatra/json"
require "json"
require "pry"

set :bind, '0.0.0.0'

set :public_folder, File.join(File.dirname(__FILE__), "public")
set :views, File.dirname(__FILE__) + "/app/views"

Dir[File.join(File.dirname(__FILE__), 'app', '**', '*.rb')].each do |file|
  require file
  also_reload file
end

def read_assignments
  JSON.parse(File.read("data.json"))
end

get "/api/v1/assignments" do
  assignments = read_assignments

  content_type :json
  json assignments
end

post "/api/v1/assignments" do
  current_assignments = read_assignments

  assignment = JSON.parse(request.body.read)
  assignment["id"] = current_assignments["assignments"].last["id"] + 1

  current_assignments["assignments"] << assignment
  File.write("assignments.json", JSON.pretty_generate(current_assignments))

  content_type :json
  status 201
  json assignment
end

get "*" do
  erb :home
end
