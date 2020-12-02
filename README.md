# utilities-mixins

Utility function example in main branch

- simpler to create functions, data. Can't specifically create methods, computed properties for a Vue component but can create functions that can be called by methods, computed properties, mounted hooks etc. 
- More work to register these as filters or methods in Vue components
- once registered, easy to use in template and in component code

Mixin example in mixins branch

- slightly more complex to set up
- can create functions, data, props, filters, mounted, created, other hooks, any/all Vue component things in a mixin
- include the mixin in a component and then everything is available to that component
- be careful if using the same names in a mixin as in the component
