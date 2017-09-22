class Step < ApplicationRecord
  validates :title, :description, :project_id, presence: true

  belongs_to :project
end
