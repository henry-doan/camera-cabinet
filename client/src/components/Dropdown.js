const [setCategory] = React.useState('');

const handleCategoryChange = (category) => {
   setCategory(category);
   console.log(category);
}

export default Dropdown;