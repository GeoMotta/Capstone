"""
This script runs the MEDashboard application using a development server.
"""

from MEDashboard import app

if (__name__ == "__main__"): 
    app.run(port = 5001)