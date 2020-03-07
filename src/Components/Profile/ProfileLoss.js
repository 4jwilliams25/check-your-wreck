// TODO: Create a way to access the report from the loss Expansion Panel

import React, { useState } from 'react';

import RearEndLoss from './RearEndLoss';
import RearEndEdit from './RearEndEdit';
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