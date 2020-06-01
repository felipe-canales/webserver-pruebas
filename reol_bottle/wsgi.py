import os
os.chdir(os.path.dirname(__file__))

import bottle
import reol_bottle

application = bottle.default_app()
