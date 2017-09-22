class Project < ApplicationRecord

  validates :title, :description, :author_id, presence: true

  belongs_to :author,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: :User

  has_many :steps
end
