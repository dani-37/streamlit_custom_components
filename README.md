#  Streamlit custom components

Easily install multiple custom components in one project by using Typescript code.This repository includes the minimum files necessary for creating your components along with some examples and an explanation of how to make and use new components. 

 ## Installation
 
 Install node in the [website](https://nodejs.org/en/download/) or by running
 ```bash
brew install node
```

Then, go to the "frontend" folder from the directory and install npm.

 ```bash
cd custom_components/frontend
npm install
```

You can check if both have been correctly installed by running

```bash
node -v 
npm -v
```

## New custom component
  
 Now comes the fun part! Just by using TSX, you can create new Streamlit components.
 
- Go to frontend/src and create a TSX file.
- For my example, I copied the code from a [Mui transfer list](https://mui.com/material-ui/react-transfer-list/) into <code>myComponent1.tsx</code>.
- Import your new component in <code>src/components.tsx</code>.

```js
import MyComp1 from "./MyComponent1"
import MyComp2 from "./MyComponent2"

const componentsMap: any = {
    'comp1': MyComp1,
    'comp2': MyComp2,
}

export default componentsMap
```

- Use the string you set in the <code>componentsMap</code> constant (in my examples, 'comp1' and 'comp2') as the name of a Python file in the <code>src/widgets</code> folder. This file holds the function you will use in Python to call your component.
- List your component in the widgets <code>__init__.py</code>. And you're done!

# Using inputs

Say I have a component <code>comp1</code> that takes a <code>str</code> variable called <code>vegetable</code>. I first set my inputs in my <code>widgets/comp1.py</code>:

```python
from ..utils import *

def comp1(vegetable:str, key=None, height=None):
    component(id=get_func_name(), kw=locals(), key=key, height=height)
```
To use it in my <code>.tsx</code>, I can simply declare it like this:

```js
   interface vars {
  vegetable: string
}
```

You will see that height is a default input. If it is left empty or set to 0, frame height will auto adjust. By using <code>streamlit run example.py</code>, you can see how this affects <code>MyComponent2</code>.


## Using your component

Now you can call your file by importing it into your Streamlit code! Simply write
```
from custom_components import *
```

If you try to show it in a Streamlit page, you will get an error message. You need to go back to the terminal, access the <code>frontend</code> directory and run:
```
cd frontend
npm run start
```
Now it should work.

## Build your component
You might not want to go through the whole npm process every time. Once you have a component you are sure is ready, you can make it into a Python package and even upload it to pip!

To name your component, go to <code>setup.py</code> and change the name of the package and author. Make sure to change the name elsewhere if you change it here (even in the <code>MANIFEST.in</code>). Then, in  <code>/custom_components/__init__.py</code>, change <code>_RELEASE</code> to <code>True</code>.
Make sure all the packages you need are listed in <code>package.json</code>
Then go to the terminal in <code>frontend</code> and run:
```
npm run build
```
You will now see a new <code>build</code> folder. Now, in the terminal, type:
```
cd.. 
cd..
python setup.py sdist bdist_wheel
```
A <code>dist</code> folder should now have appeared. You can now use pip to install your package!
```
pip install ./dist/custom_components-0.0.1-py3-none-any.whl
```

## Upload to pip:
Uploading your component online is simple! You can share with people by doing:
```
pip install twine
python -m twine upload --repository pypi dist/*
```

When publishing new versions of your component, update the version number in the <code>setup.py</code> file.
