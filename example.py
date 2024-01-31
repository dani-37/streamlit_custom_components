import streamlit as st
from custom_components import *

st.set_page_config(layout="wide") 

col1, col2, col3 = st.columns([1, 1, 1])

with col1:
    comp1('Potato')

with col2:
    #the height parameter applies to all custom components
    #not setting it will give an adjustable height
    comp2(w=300, h=200, height=100)
    comp2(w=300, h=200)

with col3:
    comp1('Tomato')