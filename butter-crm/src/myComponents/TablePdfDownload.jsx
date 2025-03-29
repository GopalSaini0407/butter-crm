import React from "react";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

const Itinerary = () => {
  const itineraryData = [
    {
      day: "Day 1",
      destination: "Baku - Arrival & Old City Tour",
      image: "https://picsum.photos/id/237/200/300",
      activities: "Visit Icherisheher (Old City), Maiden Tower, Shirvanshah's Palace",
    },
    {
      day: "Day 2",
      destination: "Baku - Modern City & Flame Towers",
      image: "https://picsum.photos/id/238/200/300",
      activities: "Explore Flame Towers, Baku Boulevard, Heydar Aliyev Center",
    },
    {
      day: "Day 3",
      destination: "Gobustan & Mud Volcanoes",
      image: "https://picsum.photos/id/239/200/300",
      activities: "Gobustan National Park, Mud Volcanoes, Bibi-Heybat Mosque",
    },
    {
      day: "Day 4",
      destination: "Sheki - Arrival & Palace of Sheki Khans",
      image: "https://picsum.photos/id/240/200/300",
      activities: "Explore Sheki Khan's Palace, Sheki Caravanserai, Shebeke workshop",
    },
    {
      day: "Day 5",
      destination: "Sheki - Nature & Local Culture",
      image: "https://picsum.photos/id/241/200/300",
      activities: "Hiking in Sheki mountains, Local sweet shops, Kish Albanian Church",
    },
    {
      day: "Day 6",
      destination: "Back to Baku & Departure",
      image: "https://picsum.photos/id/242/200/300",
      activities: "Shopping in Nizami Street, Fountain Square, Departure from Baku",
    },
  ];

  // Convert Image URL to Base64
  const getBase64Image = async (url) => {
    const response = await fetch(url);
    const blob = await response.blob();
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
  };

  // Generate PDF with same table UI
  const generatePDF = async () => {
    const pdf = new jsPDF("p", "mm", "a4");

    // Header
    pdf.setFillColor(30, 58, 138);
    pdf.rect(0, 0, 210, 20, "F");
    pdf.setTextColor(255, 255, 255);
    pdf.setFontSize(16);
    pdf.text("Baku & Sheki - 6 Days Itinerary", 14, 12);

    // Convert images to Base64
    const tableData = await Promise.all(
      itineraryData.map(async (item) => {
        const base64Image = await getBase64Image(item.image);
        return [item.day, item.destination, item.activities, base64Image];
      })
    );

    // Table
    autoTable(pdf, {
      startY: 30,
      head: [["Day", "Destination", "Activities", "Image"]],
      body: tableData.map(([day, destination, activities, imgBase64]) => [
        day,
        destination,
        activities,
        { content: "", image: imgBase64, width: 25, height: 30 }, // Image column
      ]),
      margin: { left: 10, right: 10 },
      styles: { cellPadding: 5, fontSize: 10, valign: "middle" },
      columnStyles: {
        0: { cellWidth: 20, fontStyle: "bold", textColor: [30, 64, 175] }, // Day column
        1: { cellWidth: 55 }, // Destination column
        2: { cellWidth: 75 }, // Activities column
        3: { cellWidth: 35, halign: "center" }, // Image column
      },
      didDrawCell: (data) => {
        if (data.column.index === 3 && data.cell.raw.image) {
          const imgWidth = 25;
          const imgHeight = 30;
          const xPos = data.cell.x + (data.cell.width - imgWidth) / 2;
          const yPos = data.cell.y + 3;
          pdf.addImage(data.cell.raw.image, "JPEG", xPos, yPos, imgWidth, imgHeight);
        }
      },
    });

    // Footer
    const pageHeight = pdf.internal.pageSize.height;
    pdf.setFillColor(30, 58, 138);
    pdf.rect(0, pageHeight - 15, 210, 15, "F");
    pdf.setTextColor(255, 255, 255);
    pdf.setFontSize(10);
    pdf.text("Contact: +994 50 123 4567 | Email: travel@azerbaijan.com", 14, pageHeight - 7);

    pdf.save("Itinerary.pdf");
  };

  return (
    <div style={{ textAlign: "center", margin: "20px", fontFamily: "Arial, sans-serif" }}>
      {/* Header Section */}
      <div style={{ background: "#1E3A8A", padding: "10px", color: "white", borderRadius: "8px 8px 0 0" }}>
        <h1 style={{ margin: "10px 0" }}>Baku & Sheki - 6 Days Itinerary</h1>
        <h3 style={{ margin: "5px 0" }}>Azerbaijan's Best Travel Experience</h3>
      </div>

      {/* Table Section */}
      <table border="1" cellPadding="8" style={{ margin: "auto", borderCollapse: "collapse", width: "90%", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" }}>
        <thead>
          <tr style={{ background: "#2563EB", color: "white", fontWeight: "bold" }}>
            <th style={{ width: "10%" }}>Day</th>
            <th style={{ width: "30%" }}>Destination</th>
            <th style={{ width: "40%" }}>Activities</th>
            <th style={{ width: "20%" }}>Image</th>
          </tr>
        </thead>
        <tbody>
          {itineraryData.map((item, index) => (
            <tr key={index} style={{ textAlign: "center", background: index % 2 === 0 ? "#F3F4F6" : "#E5E7EB" }}>
              <td style={{ fontWeight: "bold", color: "#1E40AF" }}>{item.day}</td>
              <td style={{ fontWeight: "bold" }}>{item.destination}</td>
              <td>{item.activities}</td>
              <td>
                <img src={item.image} alt={item.destination} width="120" height="80" style={{ borderRadius: "8px" }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Footer Section */}
      <div style={{ background: "#1E3A8A", padding: "10px", color: "white", marginTop: "10px", borderRadius: "0 0 8px 8px" }}>
        <p style={{ margin: "5px 0" }}>Contact: +994 50 123 4567 | Email: travel@azerbaijan.com</p>
        <p style={{ margin: "5px 0" }}>© 2025 Azerbaijan Travel Co. | All Rights Reserved</p>
      </div>

      {/* PDF Download Button */}
      <button
        onClick={generatePDF}
        style={{
          marginTop: "20px",
          padding: "12px 20px",
          fontSize: "16px",
          color: "white",
          background: "#2563EB",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Download PDF
      </button>
    </div>
  );
};

export default Itinerary;
