import React, { useEffect, useRef, useState } from 'react';
import { CardFooter } from '@nextui-org/card';
import { Button } from '@nextui-org/button';

const ResponsiveCardFooter = (props: {tags: string[], containerWidth: number, onClick: ()=>any}) => {
  const [visibleTags, setVisibleTags] = useState([] as string[]);
  const [showMore, setShowMore] = useState(false);
  const [containerWidth, setContainerWidth] = useState(props.containerWidth);

  useEffect(() => {
    const calculateVisibleTags = () => {
      setContainerWidth(containerWidth);

      let totalWidth = 0;
      let visibleCount = 0;

      // Create temporary div to measure button widths
      const temp = document.createElement('div');
      temp.style.visibility = 'hidden';
      temp.style.position = 'absolute';
      document.body.appendChild(temp);

      for (let i = 0; i <props.tags.length; i++) {
        const button = document.createElement('button');
        button.textContent =props.tags[i];
        button.className = 'px-3 py-1 text-sm rounded-full';
        temp.appendChild(button);
        
        const buttonWidth = button.offsetWidth + 8; // Add margin
        totalWidth += buttonWidth;

        if (totalWidth <= containerWidth - (props.tags.length > i + 1 ? 80 : 0)) {
          visibleCount++;
        } else {
          break;
        }
      }

      document.body.removeChild(temp);
      setVisibleTags(props.tags.slice(0, visibleCount));
      setShowMore(visibleCount <props.tags.length);
    };

    calculateVisibleTags();
    window.addEventListener('resize', calculateVisibleTags);
    return () => window.removeEventListener('resize', calculateVisibleTags);
  }, [props.tags, containerWidth]);

  return (
    <CardFooter className="gap-2 flex flex-wrap">
      {visibleTags.map((tag, index) => (
        <Button
          onPress={() => props.onClick()}
          key={index}
          size="sm"
          radius="full"
          variant="flat"
          className="text-sm"
        >
          {tag}
        </Button>
      ))}
      {showMore && (
        <Button
          onPress={()=>props.onClick()}
          size="sm"
          radius="full"
          variant="flat"
          className="text-sm"
        >
          +{props.tags.length - visibleTags.length} more
        </Button>
      )}
    </CardFooter>
  );
};

export default ResponsiveCardFooter;