// 代码生成时间: 2025-09-29 00:03:01
$(document).ready(function() {

    // Define the KnowledgeBase class
    class KnowledgeBase {
        constructor() {
            this.baseUrl = '/api/knowledge-base'; // Base URL for API
            this.items = []; // Array to hold knowledge base items
        }

        // Fetch all knowledge base items
        fetchItems() {
            $.ajax({
                url: this.baseUrl,
                method: 'GET',
                success: (data) => {
                    this.items = data;
                    // Assuming a function renderItems exists to display the items
                    this.renderItems();
                },
                error: (xhr, status, error) => {
                    console.error('Error fetching knowledge base items:', error);
                    alert('Failed to fetch knowledge base items.');
                }
            });
        }

        // Add a new knowledge base item
        addItem(item) {
            $.ajax({
                url: this.baseUrl,
                method: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(item),
                success: () => {
                    // Assuming a function fetchItems exists to refresh the list after adding
                    this.fetchItems();
                },
                error: (xhr, status, error) => {
                    console.error('Error adding knowledge base item:', error);
                    alert('Failed to add knowledge base item.');
                }
            });
        }

        // Delete a knowledge base item by id
        deleteItem(itemId) {
            $.ajax({
                url: `${this.baseUrl}/${itemId}`,
                method: 'DELETE',
                success: () => {
                    // Assuming a function fetchItems exists to refresh the list after deletion
                    this.fetchItems();
                },
                error: (xhr, status, error) => {
                    console.error('Error deleting knowledge base item:', error);
                    alert('Failed to delete knowledge base item.');
                }
            });
        }

        // Render the knowledge base items on the page
        renderItems() {
            // Assuming there is a container with id 'knowledge-base-container'
            const container = $('#knowledge-base-container');
            container.empty(); // Clear the container

            this.items.forEach(item => {
                container.append(
                    $("<div>").append(
                        $("<h3>").text(item.title),
                        $("<p>").text(item.content),
                        $("<button>").text("Delete").click(() => this.deleteItem(item.id))
                    )
                );
            );
        }
    }

    // Instantiate the KnowledgeBase class
    const knowledgeBase = new KnowledgeBase();

    // Fetch items on document ready
    knowledgeBase.fetchItems();

    // Event listener for adding a new knowledge base item
    $('#add-item-form').on('submit', function(event) {
        event.preventDefault();
        const title = $('#item-title').val();
        const content = $('#item-content').val();

        if (!title || !content) {
            alert('Title and content are required.');
            return;
        }

        const newItem = { title, content };
        knowledgeBase.addItem(newItem);
    });
});