from .component_func import component
import inspect

def get_func_name():
    return inspect.stack()[1][3]
