class VillagesController < ApplicationController
  def index
  end

  def all
    @villages = Village.all
    render json: @villages
  end

  def show
  end

  def create
    @village = Village.new(village_params)
    @village.save
    redirect_to villages_path
  end

  def new
    @village = Village.new
    @name = params[:name]
    @latitude = params[:latitude]
    @longitude = params[:longitude]
  end

  private

  def village_params
    params.require(:village).permit(:name, :longitude, :latitude)
  end
end
