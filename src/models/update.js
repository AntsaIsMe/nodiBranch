export const  updateTemplate = ()=>{
  return `
    export const update = async (req, res) => {
      try {
        res.status(200).json({ 
          message: "Update successful "
          });
      } catch (error) {
        res.status(500).json({ 
          error: error.message 
          });
      }
    };`
}