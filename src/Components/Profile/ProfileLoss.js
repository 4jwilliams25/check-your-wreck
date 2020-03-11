// TODO: Find a way to collapse the expansion panel when deleting a loss
// TODO: Create a way to access the report from the loss Expansion Panel
// TODO: make sure the edit forms have all the same conditional checks as the main accident form

import React from 'react';

import RearEndLoss from './RearEndLoss';
import LaneChangeLoss from './LaneChangeLoss';
import BackingLoss from './BackingLoss';

export default function ProfileLoss({ loss }) {
    
    switch (loss.accident_type) {
        case 'rearEnd': 
            return (
                <RearEndLoss loss={loss} />
            );
        case 'laneChange':
            return (
                <LaneChangeLoss loss={loss} />
            );
        case 'backing':
            return (
                <BackingLoss loss={loss} />
            );
        default: 
            return []
    }
}