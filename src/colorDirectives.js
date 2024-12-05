export default {
mounted(el, binding) {
    console.log(binding);
    console.log(el)
 el.style[binding.arg] = binding.value
},

updated(el, binding) {
  
el.style[binding.arg] = binding.value
}
}
    
