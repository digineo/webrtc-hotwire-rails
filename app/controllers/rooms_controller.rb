class RoomsController < ApplicationController
  def new
  end

  def create
    redirect_to room_path(42)
  end

  def show
    @client = Client.new(id: SecureRandom.uuid)
    cookies.encrypted[:client_id] = @client.id
    @room = Room.new(id: params[:id])
  end
end
