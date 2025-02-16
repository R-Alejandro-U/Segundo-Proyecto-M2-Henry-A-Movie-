const maxYear = () => {
    const maxYear = document.getElementById("year");
    maxYear.max = new Date().getFullYear();
};

module.exports = maxYear;