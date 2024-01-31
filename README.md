For install:
  - install node and npm https://nodejs.org/en/download/
       Or brew install node (node -v // npm -v)

  - go to frontend
	cd custom-components/frontend
	nom install

For new component:
 - new tsx file in src
 - new import in components.tsx
 - new file in widgets


For export:

NAME CHANGE:
 - setup.py
 - MANIFEST.in
 - package.json


Not in
 - comp_func

CHANGE _RELEASE = True

Npm run build

From the frontend dict: 
cd.. 
cd..
python setup.py sdist bdist_wheel

pip install ./dist/custom_components-0.0.1-py3-none-any.whl

To upload:
pip install twine
python -m twine upload --repository pypi dist/*
When publishing new versions of our component, we must update the version number in the setup.py file.