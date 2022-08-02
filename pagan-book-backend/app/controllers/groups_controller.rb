class GroupsController < ApplicationController
    
    def index
        groups = Group.all

        render json: groups
    end

    def show
        group = Group.find_by(id: params[:id])

        render json: group
    end

    def create
        group = Group.new(group_params)

        if group.save
            render json: { group: group, message: 'group created successfully' }
        else
            render json: { message: 'could not create group' }
        end
    end

    def destroy
        group = Group.find_by(id: params[:id])
        group.destroy
        render json: { message: 'group deleted successfully' }
    end

    private

    def group_params
        params.require(:group).permit(:name, :description)
    end
end
