get '/' do
  erb :index
end

post '/temperature/change' do
  headers 'Access-Control-Allow-Origin' => '*'
  session['temperature'] = params['temperature']
  @temperatures = []
  @temperatures << session['temperature']
  session['json'] = @temperatures
  {temperatures: @temperatures}.to_json
end

get '/temperature/change' do
  p session['json']
  {temperatures: session['json']}.to_json
end