export const createTemplate = () => {
  return  `
    export const create = async (req, res) => {
      try {
        res.status(201).json({ 
          message: "smthng created successfully",
          data: req.body 
          });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    };`
}