export const  getOneTemplate = ()=>{
    return `
    export const getOne = async (req, res) => {
        try {
          res.status(200).json({
            message: "Fetch ... with ID successful",
            data : "res here"
            })
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      };
    `
}
