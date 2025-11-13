from app.db.session import engine, Base
from app.models import user, watchlist, alert

def init_db():
    """Initialize database tables"""
    Base.metadata.create_all(bind=engine)

