export const  getAllTemplate = ()=>{
  return `
    export const getAll = async (req, res) => {
      try {
        res.status(200).json({
           message: "Fetch all datas successful" ,
           data : "res here"
          });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    };`
}
