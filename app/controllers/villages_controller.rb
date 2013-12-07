class VillagesController < ApplicationController
  def index
  end

  def show
  end

  def create
    @village = Village.new(params[:village])
    @village.save
    redirect_to villages_path
  end

  def new
    @village = Village.new
  end
end
