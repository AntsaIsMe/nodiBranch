export const  deleteTemplate = ()=>{
  return `
    export const remove = async (req, res) => {
      try {
        res.status(200).json({ message: "Delete successful" });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    };`
}
