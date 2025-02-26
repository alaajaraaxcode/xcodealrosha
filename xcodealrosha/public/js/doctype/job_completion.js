frappe.ui.form.on("Job Completion", "refresh", function(frm) {
	// sales invoice filter
    frm.set_query("si", function() {
		return {
			filters: {
				"customer": frm.doc.customer,
				'status': ['Not In', ['Cancelled','Draft']]
			}
		}
	});
	// sales order filter
    frm.set_query("qu", function() {
		return {
			filters: {
                "customer": frm.doc.customer,
                'status': ['Not In', ['Cancelled','Draft']]
			}
		}
	});

	// frm.set_query("qu", function() {
	// 	return {
	// 		filters: {
	// 			"quotation_to": "Customer",
    //             "party_name": frm.doc.customer,
    //             "docstatus":['!=', 'Cancelled']
	// 		}
	// 	}
	// });
});