class Api::DocumentsController < ApplicationController
    before_action :set_gear
    before_action :set_document, only: [:show, :update, :destroy]
      
    def index 
      render json: @gear.documents
    end
      
    def show
      render json: @document
    end
      
    def create 
      @document = @gear.documents.new(document_params)
      if @document.save
        render json: @document
      else
        render json: { errors: @document.errors }, status: :unprocessable_entity
      end
    end
      
    def update
      if @document.update(document_params)
        render json: @document
      else
        render json: { errors: @document.errors }, status: :unprocessable_entity
      end
    end
      
    def destroy
      @document.destroy
      render json: { message: "Document deleted" }
    end
      
    private
      def set_gear
        @gear = Gear.find(params[:gear_id])
      end

      def set_document
        @document = @gear.documents.find(params[:id])
      end
          
      def document_params
        params.require(:document).permit(:bought, :image)
      end
end
