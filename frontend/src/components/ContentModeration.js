import React, { useState, useEffect } from 'react';
import { moderateContent } from '../services/ModerationService';

const ContentModeration = () => {
    const [moderationData, setModerationData] = useState(null);

    useEffect(() => {
        fetchModerationData();
    }, []);

    const fetchModerationData = async () => {
        const data = await moderateContent();
        setModerationData(data);
    };

    const handleModeration = async (submissionId, decision) => {
        const result = await moderateContent(submissionId, decision);
        if (result.success) {
            fetchModerationData();
        } else {
            console.error('Failed to moderate content');
        }
    };

    return (
        <div id="content-moderation">
            <h2>Content Moderation</h2>
            {moderationData && moderationData.length > 0 ? (
                moderationData.map((submission) => (
                    <div key={submission.id}>
                        <h3>{submission.title}</h3>
                        <p>{submission.description}</p>
                        <button onClick={() => handleModeration(submission.id, 'approve')}>
                            Approve
                        </button>
                        <button onClick={() => handleModeration(submission.id, 'reject')}>
                            Reject
                        </button>
                    </div>
                ))
            ) : (
                <p>No submissions to moderate at this time.</p>
            )}
        </div>
    );
};

export default ContentModeration;