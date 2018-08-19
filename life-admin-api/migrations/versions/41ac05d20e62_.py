"""empty message

Revision ID: 41ac05d20e62
Revises: b1039f462d3d
Create Date: 2018-08-19 11:33:51.773050

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '41ac05d20e62'
down_revision = 'b1039f462d3d'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('tasks', sa.Column('lastCompleted', sa.DateTime(), nullable=True))
    op.add_column('tasks', sa.Column('recurrenceMode', sa.String(), nullable=True))
    op.add_column('tasks', sa.Column('recurrenceN', sa.Integer(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('tasks', 'recurrenceN')
    op.drop_column('tasks', 'recurrenceMode')
    op.drop_column('tasks', 'lastCompleted')
    # ### end Alembic commands ###
