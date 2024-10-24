"use server"

const getData = async () => {
    try {
      const res = await fetch("https://sheetdb.io/api/v1/wr2wqm8e1vz8r");
      const data = await res.json();
      return data
    } catch (error) {
      return {error:'error'}
    }
  };

export default getData;