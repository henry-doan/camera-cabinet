class Api::KitsController < ApplicationController
  before_action :set_kit, only: [:show, :update, :destroy]

  def index 
    render json: current_user.kits
  end

  def show
<<<<<<< HEAD
=======
    # @kit = current_user.kits.find(params[:id])
>>>>>>> a9fda6d (rebasing to newest version)
    render json: @kit
  end

  def create
    @kit = current_user.kits.new(kit_params)
    if @kit.save
      render json: @kit
    else
      render json: { errors: @kit.errors }, status: :unprocessable_entity
    end
  end

  def update 
    if @kit.update(kit_params)
      render json: @kit
    else
      render json: { errors: @kit.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @kit.destroy
    render json: { message: "Kit was deleted"}
  end

  private 
    # def set_kit
    #   @kit = current_user.kits.find(params[:id])
    # end

    def kit_params
      params.require(:kit).permit(:name, :description, :image)
    end

    def set_kit
      @kit = current_user.kits.find(params[:id])
    end
end
