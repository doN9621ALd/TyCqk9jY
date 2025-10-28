// 代码生成时间: 2025-10-28 17:57:59
$(document).ready(function() {

  // Initialize the career plans array
  let careerPlans = [];

  /**
   * Adds a new career plan to the system.
   * @param {Object} plan - The career plan object.
   */
  function addCareerPlan(plan) {
    if (!plan.name || !plan.details) {
      console.error('Error: Career plan must have a name and details.');
      return;
    }
    careerPlans.push(plan);
    console.log('Career plan added:', plan);
  }

  /**
   * Updates an existing career plan in the system.
   * @param {number} index - The index of the plan to update.
   * @param {Object} newPlan - The updated career plan object.
   */
  function updateCareerPlan(index, newPlan) {
    if (index < 0 || index >= careerPlans.length) {
      console.error('Error: Invalid plan index.');
      return;
    }
    if (!newPlan.name || !newPlan.details) {
      console.error('Error: Career plan must have a name and details.');
      return;
    }
    careerPlans[index] = newPlan;
    console.log('Career plan updated:', newPlan);
  }

  /**
   * Removes a career plan from the system.
   * @param {number} index - The index of the plan to delete.
   */
  function deleteCareerPlan(index) {
    if (index < 0 || index >= careerPlans.length) {
      console.error('Error: Invalid plan index.');
      return;
    }
    const deletedPlan = careerPlans.splice(index, 1)[0];
    console.log('Career plan deleted:', deletedPlan);
  }

  /**
   * Retrieves a career plan by index.
   * @param {number} index - The index of the plan to retrieve.
   * @returns {Object} - The career plan object.
   */
  function getCareerPlan(index) {
    if (index < 0 || index >= careerPlans.length) {
      console.error('Error: Invalid plan index.');
      return null;
    }
    return careerPlans[index];
  }

  /**
   * Retrieves all career plans.
   * @returns {Array} - An array of career plan objects.
   */
  function getAllCareerPlans() {
    return careerPlans;
  }

  // Example usage:
  addCareerPlan({ name: 'Software Developer', details: 'Plan to become a software developer.' });
  addCareerPlan({ name: 'Data Scientist', details: 'Plan to become a data scientist.' });

  // Update the first career plan
  updateCareerPlan(0, { name: 'Senior Software Developer', details: 'Plan to become a senior software developer.' });

  // Delete the second career plan
  deleteCareerPlan(1);

  // Retrieve all career plans
  console.log(getAllCareerPlans());

});
