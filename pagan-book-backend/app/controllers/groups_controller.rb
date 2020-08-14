class GroupsController < ApplicationController

    def index
        groups = Group.all

        render json: groups
    end

    def create

    end

    def destroy

    end
end
