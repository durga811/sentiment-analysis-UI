import React from 'react';
import '../ReviewHighlighter.css';

const sentimentColors = {
  Positive: '#D9F2DD',
  Negative: '#F2DBD9',
  Mixed: '#e8bd6d3d',
  Neutral: '#eaf09b6b',
};

const ReviewHighlighter = ({ content, analytics }) => {
  const renderHighlightedText = () => {
    let highlightedText = [];
    let lastIndex = 0;

    analytics.forEach((analytic, index) => {
      analytic.highlight_indices.forEach((highlight, i) => {
        const [start, end, sentiment] = highlight;

        if (lastIndex < start) {
          highlightedText.push(
            <span key={`${index}-${i}-text`}>
              {content.substring(lastIndex, start)}
            </span>
          );
        }

        highlightedText.push(
          <span
            key={`${index}-${i}-highlight`}
            className="highlight"
            style={{ backgroundColor: sentimentColors[sentiment] }}
            data-tooltip={analytic.topic}
          >
            {content.substring(start, end)}
          </span>
        );

        lastIndex = end;
      });
    });

    if (lastIndex < content.length) {
      highlightedText.push(
        <span key="last-text">{content.substring(lastIndex)}</span>
      );
    }

    return highlightedText;
  };

  return <p className="review-content">{renderHighlightedText()}</p>;
};

export default ReviewHighlighter;
