import React, { useEffect, useState } from "react";
import { getAuthors } from "@/services";
import { Helmet } from "react-helmet";
import "./app.css";

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      const authorsData = await getAuthors();
      setTeamMembers(authorsData);
    };

    fetchTeamMembers();
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Edulga.ai",
    "member": teamMembers.map(member => ({
      "@type": "Person",
      "name": member.name,
      "jobTitle": member.jobTitle,
      "description": member.bio,
      "image": member.photo.url,
      "sameAs": [
        member.socialLinks?.linkedin,
        member.socialLinks?.twitter
      ].filter(Boolean)
    }))
  };

  return (
    <>
      <Helmet>
        <title>Meet Our Team | Edulga.ai</title>
        <meta name="description" content="Meet the expert team behind Edulga.ai. Our diverse group of professionals is dedicated to revolutionizing AI education." />
        <meta name="keywords" content="Edulga.ai team, AI education experts, educational technology leaders" />
        
        <meta property="og:title" content="Meet Our Team | Edulga.ai" />
        <meta property="og:description" content="Meet the expert team behind Edulga.ai. Our diverse group of professionals is dedicated to revolutionizing AI education." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={teamMembers[0]?.photo?.url || ''} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Meet Our Team | Edulga.ai" />
        <meta name="twitter:description" content="Meet the expert team behind Edulga.ai. Our diverse group of professionals is dedicated to revolutionizing AI education." />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <section className="section-white">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="section-title">The Team Behind Edulga.ai</h1>
            </div>
            
            <div className="team-container">
              {teamMembers.map((member) => (
                <article 
                  key={member.name} 
                  className="team-item"
                  itemScope 
                  itemType="https://schema.org/Person"
                >
                  <img 
                    src={member.photo.url} 
                    alt={`${member.name} - ${member.jobTitle} at Edulga.ai`} 
                    className="team-img"
                    itemProp="image"
                    loading="lazy"
                  />
                  <h2 itemProp="name">{member.name}</h2>
                  <p itemProp="jobTitle" className="job-title">{member.jobTitle}</p>
                  <div 
                    itemProp="description" 
                    className="team-info"
                  >
                    {member.bio}
                  </div>
                  
                  {member.socialLinks && (
                    <div className="social-links">
                      {member.socialLinks.linkedin && (
                        <a 
                          href={member.socialLinks.linkedin}
                          itemProp="sameAs"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name}'s LinkedIn profile`}
                        >
                          LinkedIn
                        </a>
                      )}
                      {member.socialLinks.twitter && (
                        <a 
                          href={member.socialLinks.twitter}
                          itemProp="sameAs"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name}'s Twitter profile`}
                        >
                          Twitter
                        </a>
                      )}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
