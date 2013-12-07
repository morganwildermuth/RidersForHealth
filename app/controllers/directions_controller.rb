class DirectionsController < ApplicationController
  def new
    @direction = Direction.new
  end

  def create
    st_vil_id = Village.where("name = ?", direction_params[:start_village_id]).first.id
    end_vil_id = Village.where("name = ?", direction_params[:end_village_id]).first.id
    @direction = Direction.new({start_village_id: st_vil_id, end_village_id: end_vil_id, description: direction_params[:description]})
    if @direction.save
      redirect_to direction_path
    end
  end

  def show
  end

  private
  
  def direction_params
    params.require(:direction).permit(:description, :start_village_id, :end_village_id)
  end
end